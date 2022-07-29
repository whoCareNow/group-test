import { Input } from "antd";
import { useEffect, useState } from "react";
import Fetch from "../../api/fetch";
import { SearchEvent } from "../../type/Event";
import _ from "lodash";
import { userInfo } from "../../type/Data";
import List from "./List";
const init: () => Promise<userInfo[]> = async () => {
  const res = await Fetch.get("getuser");
  if (res.message === "success") return res.data;
  else return [];
};
const getuser = _.throttle(init, 30000, { leading: true, trailing: false });
export default function Search() {
  const [userList, setUserList] = useState<userInfo[]>([]);
  const [query, setQuery] = useState<string>("");
  const onSearch = (value: string, e?: SearchEvent) => {
    setQuery(value);
  };
  const searchUserName: () => userInfo[] = () => {
    if (query === "") return userList;
    else return userList.filter((user) => user.name.indexOf(query) !== -1);
  };
  console.log("search render");
  useEffect(() => {
    console.log("search mount");

    return () => {
      console.log("search unmount");
    };
  });

  useEffect(() => {
    getuser()?.then((res) => {
      setUserList(res);
    });
  }, []);

  return (
    <>
      <div className="search-wrapper">
        <Input.Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
      </div>
      <div className="lists-wrapper">
        {searchUserName().map((user) => (
          <List
            key={user.id}
            id={user.id}
            name={user.name}
            phone={user.phone}
            city={user.city}
            email={user.email}
          />
        ))}
      </div>
    </>
  );
}
