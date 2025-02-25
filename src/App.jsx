import './App.css'
import Header from "./components/Header.jsx"
import Entry from "./components/Entry.jsx"
import data from './data.js'

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function App() {

    console.log("App is rendering")

    const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                {...entry}
            />
        )
    })
    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}