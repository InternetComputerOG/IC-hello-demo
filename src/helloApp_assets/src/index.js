import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as helloApp_idl, canisterId as helloApp_id } from 'dfx-generated/helloApp';

const agent = new HttpAgent();
const helloApp = Actor.createActor(helloApp_idl, { agent, canisterId: helloApp_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await helloApp.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
