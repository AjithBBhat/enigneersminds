import { Modal, Form, Input, Button, Select } from "antd";
import { EditOutlined } from "@ant-design/icons";

const { Option } = Select;
const CategoryUpdateModal = ({
  visible,
  setVisible,
  handleUpdate,
  updatingCategory,
}) => {
  return (
    <Modal
      title="Update category"
      visible={visible}
      footer={null}
      onCancel={() => setVisible(false)}
    >
      <Form
        onFinish={handleUpdate}
        fields={[{ name: ["name"], value: updatingCategory.name }, { name: ["type"], value: updatingCategory.type }]}
      >
        <Form.Item name="name" label="Name">
          <Input
            prefix={<EditOutlined className="site-form-item-icon" />}
            placeholder="Give it a name"
          />
        </Form.Item>
        <Form.Item name="type" label="Type">
            <Select placeholder="Select a type" defaultValue="Services">
      <Option value="Services">Services</Option>
      <Option value="Industries">Industries</Option>
    </Select>
  </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  );
};

export default CategoryUpdateModal;
