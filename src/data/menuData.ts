export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Chicken Biryani",
    description: "Classic rice dish packed with chicken and spices.",
    price: 6.99,
    category: "Biryani",
  },
  {
    id: 2,
    name: "Vegetable Biryani",
    description: "A flavorful vegetarian rice dish with mixed vegetables.",
    price: 5.99,
    category: "Biryani",
  },
  {
    id: 3,
    name: "Chicken Curry",
    description: "A rich curry served with bold spices and deep flavor.",
    price: 6.49,
    category: "Curries",
  },
  {
    id: 4,
    name: "Paneer Wrap",
    description: "Soft wrap filled with paneer, salad, and sauce.",
    price: 4.99,
    category: "Wraps",
  },
  {
    id: 5,
    name: "Masala Chips",
    description: "Crispy chips with a spicy masala seasoning.",
    price: 2.99,
    category: "Sides",
  },
  {
    id: 6,
    name: "Choley Bhatura",
    description: "A filling chickpea curry served with bhatura bread.",
    price: 5.99,
    category: "Street Food",
  },
  {
    id: 7,
    name: "Student Saver Deal",
    description: "Wrap, fries, and a drink at a student-friendly price.",
    price: 7.99,
    category: "Deals",
  },
  {
    id: 8,
    name: "Mango Lassi",
    description: "A cool and refreshing yogurt-based mango drink.",
    price: 2.49,
    category: "Drinks",
  },
];