import styled from "styled-components";
import type { Character } from "../types";

const Card = styled.div`
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #2b668a;
    text-align: center;
`;

const Img = styled.img`
    max-width: 200px;
    margin-bottom: 9px;
`;

const Name = styled.h3`
    margin: 8px 0;
    font-size: 24px;
    font-weight: bold;
    color: #101c51;
`;

const Info = styled.div`
  margin-top: 12px;
  padding: 10px;
  border-radius: 8px;
  background-color: #f0f0f0;
  color: #222;
  text-align: center;
`;

export default function Characters({ data }: { data: Character[] }) {
    return (
        <div>
            {data.map((char) => (
                <Card key={char.fullName}>
                    {char.image ? (
                        <Img src={char.image} alt={char.fullName} />
                    ) : (
                        <p>No pic</p>
                    )}
                    <Name>{char.fullName}</Name>
                    <Info>
                        <p>Nickname: {char.nickname || "—"}</p>
                        <p>House: {char.hogwartsHouse || "—"}</p>
                        <p>Actor: {char.interpretedBy || "—"}</p>
                    </Info>
                </Card>
            ))}
        </div>
    );
}
