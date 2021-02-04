import React from 'react';
// import ApiAlteration from './ApiAlteration';

function MovieFeedAdd(props) {
  // console.log("props: " + JSON.stringify(props));
  // console.log("props.moviesResponse: " + JSON.stringify(props.moviesResponse));

  // if (props.moviesResponse[0]['Status']) {
  //   console.log("props.moviesResponse[0]['Status']: " + props.moviesResponse[0]['Status']);
  //   if (props.moviesResponse[0]['Status'] && props.moviesResponse[0]['Message']) {
  //     alert (props.moviesResponse[0]['Status'] + ": " + props.moviesResponse[0]['Message']);
  //   }
  // }
  // else {
  //   console.log("props.moviesResponse[0]['Status']: Does not exist");
  // }

  // Hook for use reducer which utilizes use state
  // const [callApiAlteration, setCallApiAlteration] = useState({contentResponse: '', newList: props.moviesResponse});

  // function handleAlteration(titlelong, titleshort, publishdate, actionstatus, method) {
  //   // console.log("props.moviesResponse[0]['Status']: " + (props.moviesResponse[0]['Status'] ? 'Exists' : 'Does not exists'));
  //   // console.log("props.moviesResponse.indexOf('Status'): " + props.moviesResponse.indexOf('Status') > -1);

  //   // if (props.moviesResponse[0]['Status'] === "Success") {
  //   //   console.log("props.moviesResponse[0]['Status']: " + props.moviesResponse[0]['Status']);
  //   // }

  //   // if (props.moviesResponse[0].Status === "Success") {
  //   //   console.log('Status is success')
  //   // }

  //   // console.log("newListResponse: " + JSON.stringify(callApiAlteration.newList));

  //   const contentResponse = (<ApiAlteration
  //     method={
  //       method
  //     }
  //     payload= {{
  //       titlelong: titlelong,
  //       titleshort: titleshort,
  //       publishdate: publishdate,
  //       actionstatus: actionstatus
  //     }} />);

  //   // Set new list without element
  //   const newList = callApiAlteration.newList.filter((item) => item.titlelong !== titlelong);

  //   // Set state with new list
  //   setCallApiAlteration({contentResponse: contentResponse, newList: newList});

  //   // console.log("props.moviesResponse[0]: " + JSON.stringify(props.moviesResponse[0]));

  //   // console.log("callApiAlteration: " + JSON.stringify(callApiAlteration));
  // }

  // Set content variable
  let content = (
    <div>
      {props.moviesResponse.length > 0 &&
        props.moviesResponse.map((movieResponse, key) =>
        <div key = {key} id={key}>
          <div className = "border mb-4 rounded overflow-hidden bg-gray-700 text-yellow-100">
            <div className = "p-3">
              {
                (
                  movieResponse.Status === 'Error'
                  ?
                    <div className = 'font-bold mb-3 text-red-500'>
                      {movieResponse.Status}
                      <p>
                        { movieResponse.Message }
                      </p>

                    </div>
                  :
                    <div className = "font-bold mb-3">
                      {movieResponse.Status}
                      <p>
                        { movieResponse.Message }
                      </p>
                    </div>
                )
              }
            </div>
          </div>
        </div>
      )}

      {props.moviesResponse.contentResponse}
    </div>
  );

  return (
    <div>
      {content}
    </div>
  );
}

export default MovieFeedAdd;