export interface User {
  id: string;
  fullName: string;
  email: string;
  bio: string;
}

export const users: User[] = [
  {
    id: "1",
    fullName: "John Doe",
    email: "john.doe@example.com",
    bio: "Software Engineer with a passion for web development.",
  },
  {
    id: "2",
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    bio: "UI/UX Designer who loves creating beautiful user interfaces.",
  },
  {
    id: "3",
    fullName: "Alice Johnson",
    email: "alice.johnson@example.com",
    bio: "Full Stack Developer and open source enthusiast.",
  },
  {
    id: "4",
    fullName: "Bob Brown",
    email: "bob.brown@example.com",
    bio: "Data Scientist exploring the world of AI and Machine Learning.",
  },
];
