import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "./DataProvider";

const List = () => {
  const { db, setDb } = useContext(DataContext);
  const params = useParams();
  const navigate = useNavigate();

  function removeFromWatchList(i) {
    let answer = window.confirm("Are you sure to Log out ?");
    if (answer) {
      const clone = { ...db };
      clone.db.genres.filter((element) => {
        element.movies.splice(i, 1);
      });
      setDb(clone);
      const clone2 = { ...db };
      clone2.db.movies.splice(i, 1);
      setDb(clone2);
    }
  }

  return (
    <>
      <div className="category">
        {db.db.genres.map((item) => {
          return (
            <>
              {item.movies.map((el, i) => {
                return (
                  <>
                    {":" + item.id === params.id && el.type === "Movie" ? (
                      <div className="category-div">
                        <div className="category-name">{el.name}</div>
                        {db.db.currentUser.admin === true && (
                          <div
                            className="removeFromWatchList"
                            onClick={() => removeFromWatchList(i)}
                          >
                            remove
                          </div>
                        )}
                        <img
                          className="category-img"
                          src={el.url}
                          height="350"
                          width="250"
                        />
                        <div className="category-sl">
                          {el.storyLine}
                          <br />
                          <button
                            className="category-btn"
                            onClick={() => navigate(`/profile/${el.id}`)}
                          >
                            more info
                          </button>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
            </>
          );
        })}
      </div>
    </>
  );
};

export default List;
