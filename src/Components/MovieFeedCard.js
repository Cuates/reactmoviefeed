import React from 'react';

function MovieFeedCard(props) {
  let content = (
    props.moviesResponse.map((movieResponse, key) =>
      <div key = {key} id={key}>
        <div className = "border mb-4 rounded overflow-hidden bg-gray-700 text-yellow-100">
          <div className = "p-3">
            <h3 className = "font-bold text-xl mb-3 break-words">
              { movieResponse.titlelong }
            </h3>
            <div className = "font-bold mb-3 break-words">
              { movieResponse.titleshort }
            </div>
            <div className = "font-bold mb-3 break-words">
              { movieResponse.publishdate }
            </div>
            <div className = "font-bold mb-3 break-words">
              { movieResponse.actionstatus }
            </div>
          </div>
        </div>
      </div>
    )
  );

  return (
    <div>
      {content}
    </div>
  );
}

export default MovieFeedCard;