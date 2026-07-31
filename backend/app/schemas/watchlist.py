from pydantic import BaseModel


class WatchlistResponse(BaseModel):
    id: int
    movie_id: int

    class Config:
        from_attributes = True