import React, { useEffect, useRef, useState } from "react";

function Room() {
  const checkBox = useRef([]);
  const roomArray = useRef([]);
  const adult = useRef([]);
  const children = useRef([]);
  const alert = useRef(null);
  const [data, setData] = useState(() => {
    const data = localStorage.getItem("prevData");
    return data !== null ? JSON.parse(data) : [];
  });
  const [rooms, setRooms] = useState([
    { name: "Room 1", class: "room", selected: true },
    { name: "Room 2", class: "room", selected: false },
    { name: "Room 3", class: "room", selected: false },
    { name: "Room 4", class: "room", selected: false },
  ]);

  useEffect(() => {
    dataReader();
  }, []);

  const dataReader = () => {
    data.map((data, idx) => {
      if (data.selected == true) {
        roomArray.current[idx].dataset.selected = true;
        checkBox.current[idx].checked = true;
        adult.current[idx].value = data.adult;
        children.current[idx].value = data.children;
      }
    });
  };

  const handlerCheckbox = (e) => {
    const currentId = e.target.id;

    if (e.target.checked === true) {
      for (let i = 0; i <= currentId; i++) {
        roomArray.current[i].dataset.selected = true;
        checkBox.current[i].checked = true;
      }
    } else {
      for (let i = currentId; i >= currentId; i++) {
        roomArray.current[i].dataset.selected = false;
        checkBox.current[i].checked = false;
        adult.current[i].value = 1;
        children.current[i].value = 0;
      }
    }
  };

  const handleSubmit = () => {
    let data = [
      {
        name: "Room 1",
        adult: adult.current[0].value,
        children: children.current[0].value,
        selected: checkBox.current[0].checked,
      },
      {
        name: "Room 2",
        adult: adult.current[1].value,
        children: children.current[1].value,
        selected: checkBox.current[1].checked,
      },
      {
        name: "Room 3",
        adult: adult.current[2].value,
        children: children.current[2].value,
        selected: checkBox.current[2].checked,
      },
      {
        name: "Room 4",
        adult: adult.current[3].value,
        children: children.current[3].value,
        selected: checkBox.current[3].checked,
      },
    ];

    localStorage.setItem("prevData", JSON.stringify(data));

    alert.current.style.opacity = "1";
    setTimeout(() => {
      alert.current.style.opacity = "0";
    }, 3000);
  };

  return (
    <div id="room-wrapper">
      <div id="room-container">
        {rooms.map((room, index) => {
          return (
            <div
              key={index}
              id={index}
              className={room.class}
              data-selected={room.selected}
              ref={(e) => (roomArray.current[index] = e)}
            >
              <div className="room-title">
                <input
                  type="checkbox"
                  id={index}
                  onChange={(e) => handlerCheckbox(e)}
                  ref={(e) => (checkBox.current[index] = e)}
                ></input>
                <span>{room.name}</span>
              </div>
              <div className="room-details">
                <div className="adult">
                  <span>
                    Adults
                    <br />
                    <span>(18+)</span>
                  </span>
                  <select
                    name="adult"
                    id="adult"
                    ref={(e) => (adult.current[index] = e)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div className="children">
                  <span>
                    Children
                    <br />
                    <span>(0-17)</span>
                  </span>
                  <select
                    name="children"
                    id="children"
                    ref={(e) => (children.current[index] = e)}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button id="submit" onClick={handleSubmit}>
        Submit
      </button>
      <div id="alert" ref={alert}>
        Data stored in local storage successfully
      </div>
    </div>
  );
}

export default Room;
