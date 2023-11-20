import "../css/card.css";

const Cards = ({ data, curGroup }) => {
  return (
    <div className="card-container">
      <div className="top-data-div">
        <span className="user-pic">{ data.id }</span>
        { curGroup === "user" ? null : (
          <img
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
            alt="userlogo"
            width="20px"
          />
        ) }
      </div>

      <div className="middle-div">
        { curGroup === "status" ? null : (
          <div>
            { data.status === "Done" ? (
              <div className="status-logo">
                <img width="16" height="16" src="https://img.icons8.com/tiny-color/16/checked.png" alt="checked" />
              </div>
            ) : data.status === "Todo" ? (
              <div className="status-logo">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/material/24/737373/0-degrees.png"
                  alt="0-degrees"
                />
              </div>
            ) : data.status === "Backlog" ? (
              <div className="status-logo">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/material/24/737373/inactive-state--v1.png"
                  alt="inactive-state--v1"
                />
              </div>
            ) : data.status === "Cancelled" ? (
              <div className="status-logo">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/737373/circled-x.png"
                  alt="circled-x"
                />
              </div>
            ) : data.status === "In progress" ? (
              <div className="status-logo">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/FAB005/realtime-protection.png"
                  alt="realtime-protection"
                />
              </div>
            ) : null }
          </div>
        ) }

        <span className="datacard-title">{ data.title }</span>
      </div>
      <div className="end-div">
        <img
          width="12"
          height="12"
          src="https://img.icons8.com/material/24/1A1A1A/more--v2.png"
          alt="more--v2"
        />
        { data.tag.map((t) => (
          <span className="tag-status" key={ t }>
            { t }
          </span>
        )) }
      </div>
    </div>
  );
};

export default Cards;