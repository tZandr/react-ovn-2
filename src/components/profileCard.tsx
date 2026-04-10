type ProfileCard = {
  name: string;
  occupation: string;
  city: string;
};

export const ProfileCard = ({ name, occupation, city }: ProfileCard) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{occupation}, {city}</p>
    </div>
  );
};
