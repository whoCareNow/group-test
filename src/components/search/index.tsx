import { Input, Radio, RadioChangeEvent, Select } from "antd";
import { useEffect, useMemo, useState } from "react";
import Fetch from "../../api/fetch";
import { SearchEvent } from "../../type/Event";
import _, { iteratee } from "lodash";
import { userInfo } from "../../type/Data";
import List from "./List";
import Item from "antd/lib/list/Item";
const init: () => Promise<userInfo[]> = async () => {
  const res = await Fetch.get("getuser");
  if (res.message === "success") return res.data;
  else return [];
};
const getuser = _.throttle(init, 30000, { leading: true, trailing: false });
const typeForQuery: Array<{ type: string; cn: string }> = [
  { type: "name", cn: "姓名" },
  { type: "city", cn: "城市" },
];

export default function Search() {
  const [userList, setUserList] = useState<userInfo[]>([]);
  const [query, setQuery] = useState<string>("");
  const [queryType, setQueryType] = useState<string>("name");
  const onSearch = (value: string, e?: SearchEvent) => {
    setQuery(value);
  };
  const handleChange = (e: RadioChangeEvent) => {
    setQueryType(e.target.value);
  };
  const searchUserName = useMemo<userInfo[]>(() => {
    if (query === "") return userList;
    else if (queryType === "name")
      return userList.filter((user) => user.name.indexOf(query) !== -1);
    else if (queryType === "city")
      return userList.filter((user) => user.city.indexOf(query) !== -1);
    else return userList;
  }, [userList, query, queryType]);
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
      <div className="selection-wrapper">
        <Radio.Group
          value={queryType}
          defaultValue="name"
          style={{ width: 200 }}
          onChange={handleChange}
        >
          {typeForQuery.map((item) => (
            <Radio value={item.type} key={item.type}>
              {item.cn}
            </Radio>
          ))}
        </Radio.Group>
      </div>
      <div className="lists-wrapper">
        {searchUserName.map((user) => (
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
