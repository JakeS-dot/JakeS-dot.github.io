import Image from "next/image";

export default function Drake() {
  return (
      <>
          <h1 style={{display: "flex", backgroundColor: "black", textAlign: 'center', padding: 5}}>This is for you evan pookie :) You cant click the vod btw</h1>
          <div
              style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "black",
                  width: "100vw",
                  height: "100vh",
              }}
          >
              <Image
                  src={"/drake.png"}
                  alt={"drake"}
                  width={500}
                  height={500}
              ></Image>
          </div>

      </>
  );
}
