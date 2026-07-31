from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.favorite import Favorite
from app.models.user import User
from app.auth.dependencies import get_current_user
from app.schemas.favorite import FavoriteResponse

router = APIRouter(
    prefix="/favorites",
    tags=["Favorites"]
)

@router.post("/{movie_id}", response_model=FavoriteResponse)
def add_to_favorites(
    movie_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    existing = db.query(Favorite).filter(
        Favorite.user_id == current_user.id,
        Favorite.movie_id == movie_id
    ).first()

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Movie already in favorites"
        )

    favorite = Favorite(
        user_id=current_user.id,
        movie_id=movie_id
    )

    db.add(favorite)
    db.commit()
    db.refresh(favorite)

    return favorite

@router.get("/", response_model=list[FavoriteResponse])
def get_favorites(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    favorites = db.query(Favorite).filter(
        Favorite.user_id == current_user.id
    ).all()

    return favorites

@router.delete("/{movie_id}")
def remove_from_favorites(
    movie_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    favorite = db.query(Favorite).filter(
        Favorite.user_id == current_user.id,
        Favorite.movie_id == movie_id
    ).first()

    if not favorite:
        raise HTTPException(
            status_code=404,
            detail="Movie not found in favorites"
        )

    db.delete(favorite)
    db.commit()

    return {
        "message": "Movie removed from favorites"
    }