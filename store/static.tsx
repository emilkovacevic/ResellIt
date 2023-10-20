import {
  FaCar,
  FaLaptop,
  FaCouch,
  FaTshirt,
  FaFutbol,
  FaBook,
  FaGavel,
  FaGamepad,
  FaRing,
  FaMusic,
  FaHome,
  FaHeart,
  FaPaw,
} from 'react-icons/fa'

export const categories = [
  { value: 'appliances', label: 'Appliances', icon: <FaLaptop /> },
  { value: 'cars', label: 'Cars and Vehicles', icon: <FaCar /> },
  {
    value: 'electronics',
    label: 'Electronics and Gadgets',
    icon: <FaLaptop />,
  },
  { value: 'furniture', label: 'Furniture and Home Decor', icon: <FaCouch /> },
  { value: 'clothing', label: 'Clothing and Accessories', icon: <FaTshirt /> },
  {
    value: 'sports',
    label: 'Sports and Outdoor Equipment',
    icon: <FaFutbol />,
  },
  { value: 'books', label: 'Books and Media', icon: <FaBook /> },
  {
    value: 'collectibles',
    label: 'Collectibles and Antiques',
    icon: <FaGavel />,
  },
  { value: 'toys', label: 'Toys and Games', icon: <FaGamepad /> },
  { value: 'jewelry', label: 'Jewelry and Watches', icon: <FaRing /> },
  { value: 'instruments', label: 'Musical Instruments', icon: <FaMusic /> },
  { value: 'home', label: 'Home and Garden', icon: <FaHome /> },
  { value: 'health', label: 'Health and Beauty Products', icon: <FaHeart /> },
  { value: 'pets', label: 'Pet Supplies', icon: <FaPaw /> },
]
