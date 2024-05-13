import Image from "next/image";

export default function Drake() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "background-color": "black",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Image src={"/drake.png"} alt={"drake"} width={500} height={500}></Image>
      <h1>This is for you evan pookie :) You can't click the vod btw</h1>
    </div>
  );
}
