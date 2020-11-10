//blogs/second_article.tsx
import { Layout } from "../../src/components/Layout";
const article2: React.FC = ({ children }) => {
  return (
    <div>
      <h1>Titre article 2</h1>
      <article>{children}</article>
    </div>
  );
};
export default article2;
