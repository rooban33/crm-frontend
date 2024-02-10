import {
  DesktopOutlined,
  SettingOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  CreditCardOutlined,
  BankOutlined,
  ShrinkOutlined,
} from '@ant-design/icons';

export const IconMenu = ({ name }) => {
  const elements = {
    DesktopOutlined: DesktopOutlined,
    SettingOutlined: SettingOutlined,
    CustomerServiceOutlined: CustomerServiceOutlined,
    FileTextOutlined: FileTextOutlined,
    FileSyncOutlined: FileSyncOutlined,
    DashboardOutlined: DashboardOutlined,
    TeamOutlined: TeamOutlined,
    UserOutlined: UserOutlined,
    CreditCardOutlined: CreditCardOutlined,
    BankOutlined: BankOutlined,
    Default: DesktopOutlined,
    ShrinkOutlined:ShrinkOutlined,
  };

  const IconTag = elements[name || 'Default'] || SettingOutlined;
  return <IconTag />;
};
