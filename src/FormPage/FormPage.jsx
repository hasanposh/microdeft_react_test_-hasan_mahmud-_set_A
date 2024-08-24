import React from 'react';

const FormPage = () => {
    return (
        <div>
            <form className='space-y-4'>
                <label className="input input-bordered flex items-center gap-2">
                    Title
                    <input name='title' type="text" className="grow" placeholder="title" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Stock
                    <input name='stock' type="text" className="grow" placeholder="stock" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Price
                    <input name='price' type="text" className="grow" placeholder="price" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Discount
                    <input name='discount' type="text" className="grow" placeholder="discount" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    Email
                    <input name='email' type="text" className="grow" placeholder="email" />
                </label>


            </form>
        </div>
    );
};

export default FormPage;