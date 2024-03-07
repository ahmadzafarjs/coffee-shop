import { useEffect } from "react";

export let coffees = []
// [
//     {
//         id: 1,
//         title: "Black coffee with almonds",
//         price: 30,
//         rating: 2.6
//     },
//     {
//         id: 2,
//         title: "Hot chocolate",
//         price: 60,
//         rating: 3
//     },
//     {
//         id: 3,
//         title: "Cold iceberg coffee",
//         price: 170,
//         rating: 4
//     },
//     {
//         id: 4,
//         title: "Day to night coffee",
//         price: 98,
//         rating: 3.6
//     },
//     {
//         id: 5,
//         title: "Man of brave coffee",
//         price: 95,
//         rating: 4
//     },
//     {
//         id: 6,
//         title: "Ultimate awake coffee",
//         price: 17,
//         rating: 4
//     },
//     {
//         id: 7,
//         title: "Nestle Forest coffee",
//         price: 99,
//         rating: 4.2
//     },
//     {
//         id: 8,
//         title: "Brown coffee",
//         price: 43,
//         rating: 4
//     },
//     {
//         id: 9,
//         title: "Sachet pack",
//         price: 4,
//         rating: 4.7
//     },
// ]


  export async function fetchCoffee(){
        const res = await fetch("https://fake-coffee-api.vercel.app/api");
        const data = await res.json()
        return data
    }


