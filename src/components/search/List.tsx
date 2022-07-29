import { Card } from "antd";
import { userInfo } from "../../type/Data";

export default function List({ id, name, phone, city, email }: userInfo) {
  return (
    <div className="site-card-border-less-wrapper">
      <Card bordered={false} style={{ width: 400 }}>
        <div className="card-content">
          <span>姓名: {name}</span>
          <span>联系方式: {phone}</span>
          <span>所在城市: {city}</span>
          <span>邮箱: {email}</span>
        </div>
      </Card>
    </div>
  );
}
