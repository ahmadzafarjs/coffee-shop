import React, { useState } from 'react';
import Form from '../components/Form';
import Button from '../components/Button';
import { useCartContext } from '../Context/CartContext';

function Checkout() {
    const {items, getTotal} = useCartContext()
    const [order, setOrder] = useState({
        name: "",
        city: "",
        address: "",
        mobile: "",
        email: "",
        items: items
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setOrder({ ...order, [name]: value });
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log(order);
    }

    return (
        <section className='my-9 flex flex-col items-center justify-center gap-5 '>
            <div>

        {getTotal() === 0 ? <div className='text-center'><p className='text-center text-slate-400'>No Coffees Found! <Button type="link" to="/coffees">Shop Coffee</Button></p></div> :<div className='px-5 py-7  p-8 bg-amber-100 rounded'>
        <p>GST: <span className='italic mb-6'>$10</span></p>
        <hr />
        <p>Shipping: <span className='italic mb-6'>$20</span></p>
        <hr className='mb-6' />
        <h2 className='text-base text-slate-500'>Total</h2>
        <p className='text-amber-900 font-bold text-3xl'>${getTotal() + 30}</p>
        <div className='flex items-center justify-start mt-5 gap-7 w-[300px] '>
          
          <Button type="link" to="/coffees">Countinue Shopping</Button>
        </div>
      </div>}
            </div>
            <Form onSubmit={onSubmit}>
                <Form.Input label="Name" id="name" value={order.name} onChange={handleChange} />
                <Form.Input label="City" id="city" value={order.city} onChange={handleChange} />
                <Form.Input label="Address" id="address" value={order.address} onChange={handleChange} />
                <Form.Input label="Mobile" id="mobile" value={order.mobile} onChange={handleChange} />
                <Form.Input label="Email" id="email" value={order.email} onChange={handleChange} />
                <Button type="submit">Place Order</Button>
            </Form>
        </section>
    );
}

export default Checkout;