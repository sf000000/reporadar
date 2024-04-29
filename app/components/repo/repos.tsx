import { DatePickerWithRange } from "../date-picker";
import { LanguageSelect } from "../language-select";
import RepoList from "./repo-list";

const Repos = () => {
  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium">Repos</h2>
        <div className="flex items-center gap-2 ">
          <DatePickerWithRange />
          <LanguageSelect />
        </div>
      </div>
      <RepoList />
    </div>
  );
};

export default Repos;
