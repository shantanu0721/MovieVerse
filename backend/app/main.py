from fastapi import FastAPI
from sqlalchemy import text
from app.routes.auth import router as auth_router
from app.routes.watchlist import router as watchlist_router
from app.database import engine, Base
from app.routes.favorite import router as favorite_router
# Import models so SQLAlchemy registers them
from app.models import User, Watchlist, Favorite
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="MovieVerse API",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:5173",
    "https://movie-verse-coral.vercel.app",
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(watchlist_router)
app.include_router(favorite_router)


@app.get("/")
def home():
    return {
        "message": "Welcome to MovieVerse Backend 🚀"
    }


@app.get("/test-db")
def test_database():
    with engine.connect() as connection:
        result = connection.execute(text("SELECT 1"))
        return {
            "database": "Connected Successfully ✅",
            "result": result.scalar()
        }