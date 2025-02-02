export default function Person({ firstName, lastName, email, img }) {
  return (
    <div>
      <img src={img} alt="" />
      <h3>
        {firstName} {lastName}
      </h3>
      <h4>- {email}</h4>
    </div>
  );
}
