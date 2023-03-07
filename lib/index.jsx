// import Head from "next/head";
// import { useState } from "react";
// import styles from "./index.module.css";

//   const [animalInput, setAnimalInput] = useState("");
//   const [result, setResult] = useState();

  const animalInput = 'Lion'

  async function onSubmit() {
    // event.preventDefault();
    try {
      const response = await fetch("/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      console.log(data);

      setResult(data.result);
      setAnimalInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }

onSubmit()

//   return (
//     <div>
//       <Head>
//         <title>OpenAI Quickstart</title>
//         <link rel="icon" href="/dog.png" />
//       </Head>

//       <main className={styles.main}>
//         <img src="/dog.png" className={styles.icon} />
//         <h3>Name my pet</h3>
//         <form onSubmit={onSubmit}>
//           <input
//             type="text"
//             name="animal"
//             placeholder="Enter an animal"
//             value={animalInput}
//             onChange={(e) => setAnimalInput(e.target.value)}
//           />
//           <input type="submit" value="Generate names" />
//         </form>
//         <div className={styles.result}>{result}</div>
//       </main>
//     </div>
//   );
}