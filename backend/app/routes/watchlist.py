from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.watchlist import Watchlist
from app.models.user import User
from app.auth.dependencies import get_current_user
from app.schemas.watchlist import WatchlistResponse

router = APIRouter(
    prefix="/watchlist",
    tags=["Watchlist"]
)


@router.post("/{movie_id}", response_model=WatchlistResponse)
def add_to_watchlist(
    movie_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    existing = db.query(Watchlist).filter(
        Watchlist.user_id == current_user.id,
        Watchlist.movie_id == movie_id
    ).first()

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Movie already in watchlist"
        )

    watchlist = Watchlist(
        user_id=current_user.id,
        movie_id=movie_id
    )

    db.add(watchlist)
    db.commit()
    db.refresh(watchlist)

    return watchlist

@router.get("/", response_model=list[WatchlistResponse])
def get_watchlist(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    watchlist = db.query(Watchlist).filter(
        Watchlist.user_id == current_user.id
    ).all()

    return watchlist

@router.delete("/{movie_id}")
def remove_from_watchlist(
    movie_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    watchlist = db.query(Watchlist).filter(
        Watchlist.user_id == current_user.id,
        Watchlist.movie_id == movie_id
    ).first()

    if not watchlist:
        raise HTTPException(
            status_code=404,
            detail="Movie not found in watchlist"
        )

    db.delete(watchlist)
    db.commit()

    return {
        "message": "Movie removed from watchlist"
    }
