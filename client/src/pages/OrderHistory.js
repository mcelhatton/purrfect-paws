import React from "react"
import { Link } from "react-router-dom"

import { useQuery } from "@apollo/react-hooks"
import { QUERY_USER } from "../utils/queries"

function OrderHistory() {
    const { data } = useQuery(QUERY_USER)
    let user

    if (data) {
        user = data.user
    }

    return (
        <>
            <div className="container my-1">
                <Link to="/products" style={{ position: "relative", width: "30%", height: "10%" }}>
                    ← Back to Products
                </Link>

                {user ? (
                    <>
                        <h2
                            style={{
                                height: "10%",
                                width: "inherit",
                                display: "flex",
                                height: "10%",
                                width: "inherit",
                                position: "relative",
                                justifyContent: "center",
                            }}
                        >
                            Order History for {user.firstName} {user.lastName}
                        </h2>
                        {user.orders.map(order => (
                            <div key={order._id} className="my-2">
                                <div className="flex-row">
                                    {order.products.map(({ _id, image, name, price }, index) => (
                                        <div
                                            key={index}
                                            style={{ top: "30px", position: "relative", right: "685px" }}
                                            className="card px-1 py-1"
                                        >
                                            <Link to={`/products/${_id}`}>
                                                <h3
                                                    style={{
                                                        color: "black",
                                                        textDecoration: "underline",
                                                    }}
                                                >
                                                    {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                                                </h3>
                                                <img
                                                    alt={name}
                                                    style={{ height: "50%", width: "50%" }}
                                                    src={`/images/${image}`}
                                                />
                                                <p>{name}</p>
                                            </Link>
                                            <div>
                                                <span>${price}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </>
                ) : null}
            </div>
        </>
    )
}

export default OrderHistory
