export interface Activity {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    time: string;
    attendees: number;
    location: string;
  }
  
  export const activities: Activity[] = [
    {
      id: 1,
      title: "Brown Resgiving 2024: Afternoon High Tea Party",
      description:
        "Looking for a delightful way to spend Fall Break? Join us for Brown Resgiving 2024: Afternoon High Tea Party! ...see more",
      image: "https://events.brown.edu/live/image/scale/2x/gid/1/width/300/height/300/crop/1/13607_BrownResgiving2023.rev.1699989289.webp",
      date: "2024-11-27",
      time: "1:00 PM",
      attendees: 30,
      location: "Pembroke Green",
    },
    {
      id: 2,
      title: "Fall Dance Concert",
      description:
        "Step into a world where stories unfold through the power of movement. The 2024 Fall Dance Concert features ...see more",
      image: "https://taps.brown.edu/sites/default/files/2024-09/IMG_9874.JPG",
      date: "2024-11-24",
      time: "2:00 PM",
      attendees: 50,
      location: "Ashamu Dance Studio",
    },
    {
      id: 3,
      title: "MUSE Foundation 25th Annual Toy Drive",
      description:
        "Brown University is proud to partner with the MUSE Foundation of Rhode Island for the 25th Annual #YESpvd! ...see more",
      image: "https://events.brown.edu/live/image/scale/2x/gid/108/width/300/height/388/crop/1/17509_Red_Modern_Toy_Drive_Flyer_4.rev.1732309946.webp",
      date: "All Day (until December 12)",
      time: "7:00 AM",
      attendees: 15,
      location: "Brown University Bookstore",
    },
    {
      id: 4,
      title: "Movie Screening: The Crazies (1973)",
      description:
        "It’s time for our second screening of the month, and this one’s a classic you won’t want to miss. ...see more",
      image: "https://coolidge.org/sites/default/files/featured_images/Matilda_1996_16%20copy.jpg",
      date: "2024-11-25",
      time: "5:00 PM",
      attendees: 47,
      location: "Metcalf Research Building",
    },
  ];
  