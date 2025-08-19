# alx-project-0x14

## API Overview
The **MoviesDatabase API** (via RapidAPI) provides rich entertainment data covering movies, TV shows, and episodes.  
It includes over **9 million titles** and **11 million actor and crew profiles**.  
With this API, you can:
- Search for movies, series, or episodes
- Retrieve detailed metadata for a title (overview, release year, runtime, genre, etc.)
- Access cast and crew information
- Explore actor and crew profiles
   
---

## Version
The MoviesDatabase API does not explicitly specify version numbers in its documentation.  
It follows a **rolling release model**, where the latest data and features are always available through the same endpoints.  

---

## Available Endpoints
- **Search Titles** – Search for movies, series, or episodes by keyword or title.  
- **Get Title Details** – Retrieve metadata about a specific title (release date, genre, runtime, overview, etc.).  
- **Get Credits** – Fetch cast and crew details for a specific movie or show.  
- **Actor/Crew Profile** – Get detailed profile information for actors or crew members.  

---

## Request and Response Format

### Example Request
```http
POST https://moviesdatabase.p.rapidapi.com/titles/search/title
Headers:
  x-rapidapi-host: moviesdatabase.p.rapidapi.com
  x-rapidapi-key: YOUR_API_KEY
  Content-Type: application/json
