import "../css/cardsList.css";
import Card from "./Card";

const CardsList = ({ title, cardArr, curOrder, curGroup, logo }) => {

  // console.log(logo);

  if (cardArr) {
    if (curOrder === "title") {
      cardArr.sort(function (a, b) {
        var keyA = a.title,
          keyB = b.title;

        if (keyA > keyB) return 1;
        else if (keyA < keyB) return -1;
        else return 0;
      });
    } else if (curGroup !== "priority") {
      cardArr.sort(function (a, b) {
        var keyA = a.priority,
          keyB = b.priority;

        if (keyA > keyB) return 1;
        else if (keyA < keyB) return -1;
        else return 0;
      });
      cardArr = cardArr.slice(0).reverse();
    }
  }

  return (
    <>
      <div className="list-container">
        <div className="title">
          <div>
            { curGroup === "user" ? (
              <img
                width="18"
                height="18"
                src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                alt="userlogo"
              />
            ) : (
              <img
                width="18"
                height="18"
                src={ logo }
                alt="sorting-options--v1"
                className="settings-icon"
              />
            ) }

            <span className="list-heading">{ title }</span>
            <span className="title-num">{ cardArr ? cardArr.length : 0 }</span>
          </div>

          <div>
            {/* Add icon */ }
            <img
              width="18"
              height="18"
              src="https://img.icons8.com/material/24/1A1A1A/plus-math--v2.png"
              alt="plus-math--v2"
            />
            {/* ... icon */ }
            <img
              width="18"
              height="18"
              src="https://img.icons8.com/material/24/1A1A1A/more--v2.png"
              alt="more--v2"
              className="icon"
            />
          </div>
        </div>

        { cardArr && cardArr.map((obj) => <Card data={ obj } key={ obj.id } curGroup={ curGroup } />) }
      </div>
    </>
  );
};

export default CardsList;