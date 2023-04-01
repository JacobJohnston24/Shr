type DatabaseConstraintError = {
  type: 'unique' | 'check' | 'not null' | 'foreign key' | 'unknown';
  columnName?: string;
  message?: string;
};

type AuthRequest = {
  username: string;
  email: string;
  password: string;
};

type UserIdParam = {
  userId: string;
};

type LinkIdParam = {
  linkId: string;
};

type Pro = {
  isPro: boolean;
};

type Admin = {
  isAdmin: boolean;
};
