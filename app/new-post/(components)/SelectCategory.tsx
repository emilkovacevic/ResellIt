import useAppState from "@/store/state";

interface SelectCategoryProps {
    categories: Array<{
      value: string;
      label: string;
      icon: JSX.Element;
    }>
  }

const SelectCategory = ({ categories }: SelectCategoryProps) => {
    const {
      selectedCategory, setSelectedCategory
    } = useAppState();

    return (
      <section className="py-4">
        <h2 className="md:text-xl my-2">Select the category of your listing</h2>
        <div className="mb-2 p-2 border border-primary-foreground rounded w-full">
          {categories.map((category) => (
            <button
              key={category.value}
              className={`flex items-center w-full p-2 hover:bg-secondary ${
                selectedCategory === category.value ? 'bg-accent text-accent-foreground' : ''
              }`}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.icon}
              <span className="ml-2 inline">{category.label}</span>
            </button>
          ))}
        </div>
        {/* Selected category: {selectedCategory || 'None'} */}
      </section>
    );
  };
  
  export default SelectCategory;