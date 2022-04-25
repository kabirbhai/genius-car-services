import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useServiceDetails from "../../../hooks/useServiceDetails";

const Checkout = () => {
  const { serviceId } = useParams();
  const [user] = useAuthState(auth);
  const [service] = useServiceDetails(serviceId);

  // handlePlaceOrder
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };
  };

  // SET USESTATE AND ACCESS INPUT DATA
  /*   const [user, setUser] = useState({
    name: "kabir",
    email: "makkobir@gmail.com",
    address: "sylhet",
    phone: "282983749238479",
  });

  const handleChangeAddress = (e) => {
    const { address, ...rest } = user;
    const newAddress = e.target.value;
    const newUser = { address: newAddress, ...rest };

    setUser(newUser);
  }; */

  return (
    <div className="w-50 mx-auto">
      <h2>Please Checkout: {service.name}</h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="w-100 mb-2 p-2 rounded"
          value={user.displayName}
          type="text"
          name="name"
          placeholder="name"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-2 p-2 rounded"
          value={user.email}
          type="text"
          name="email"
          placeholder="Email"
          required
          disabled
          readOnly
        />
        <br />
        <input
          className="w-100 mb-2 p-2 rounded"
          value={service.name}
          type="text"
          name="service"
          placeholder="service"
          required
        />
        <br />
        <input
          className="w-100 mb-2 p-2 rounded"
          type="text"
          name="address"
          placeholder="address"
          autoComplete="off"
          required
        />
        <br />
        <input
          className="w-100 mb-2 p-2 rounded"
          type="text"
          name="phone"
          placeholder="Phone"
          autoComplete="off"
          required
        />
        <br />
        <input
          className="w-50 mx-auto d-block rounded p-2"
          type="submit"
          value="Book Order"
        />
      </form>
    </div>
  );
};

export default Checkout;
