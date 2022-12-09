import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

export default function Toast() {
    const showToast = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
        });
    };
    return (
        <>
            <button
                onClick={() => {
                    showToast();
                }}
            >
                toast
            </button>
        </>
    );
}
