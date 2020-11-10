//blogs/first_article.tsx
import { Layout } from "../../src/components/Layout";
const article1: React.FC = ({ children }) => {
  return (
    <div>
      <h1>Titre article 1</h1>
      <article>{children}</article>
    </div>
  );
};
export default article1;
