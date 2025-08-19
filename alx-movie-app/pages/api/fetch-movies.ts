import { MoviesProps } from "@/interfaces";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {

    if (request.method === "POST") {
        const { year, page, genre } = request.body;
        const date = new Date();
       
        const url = new URL("https://moviesdatabase.p.rapidapi.com/titles");
        url.searchParams.set("year", String(year || date.getFullYear()));
        url.searchParams.set("sort", "year.decr");
        url.searchParams.set("limit", "12");
        url.searchParams.set("page", String(page));
        if (genre) {
            url.searchParams.set("genre", genre);
        }

        const resp = await fetch(url.toString(), {
            headers: {
                "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
                "x-rapidapi-key": process.env.MOVIE_API_KEY as string,
            },
        });

        if (!resp.ok) {
            const errorText = await resp.text();
            throw new Error(`Failed ${resp.status} ${errorText}`);
        }

        const moviesResponse = await resp.json();
        const movies: MoviesProps[] = moviesResponse.results;

        return response.status(200).json({
            movies,
        });
    } else {
        response.setHeader('Allow', ['POST']);
        response.status(405).end(`Method ${request.method} Not Allowed in here`);
    }
};