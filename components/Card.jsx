import placeholder from "../src/assets/img/placeholder.png";
export default function Card() {
  return (
    <>
      <div className="card w-50 mx-auto">
        <div>
          <img
            className="card-img-top img-fluid"
            src={placeholder}
            alt="Card image cap"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Titolo del post</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae
            quaerat error id dolorem, veritatis cumque impedit laudantium
            deserunt sunt molestias facere asperiores soluta enim vitae
            provident, autem delectus aliquam.
          </p>
          <button>LEGGI DI PIÚ</button>
        </div>
      </div>
    </>
  );
}
