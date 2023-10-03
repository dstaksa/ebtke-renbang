const ID_USER_INFO = "user_info" as string;

/**
 * @description get user info form localStorage
 */
export const getData = (): any | null => {
  const user_info = JSON.parse(
    window.localStorage.getItem(ID_USER_INFO) || "{}"
  );

  return user_info;

  // return {
  //   id: user_info?.id || null,
  //   username: user_info?.username || null,
  //   fullname: user_info?.fullname || null,
  //   email: user_info?.email || null,
  //   password: null,
  //   access_token: user_info.access_token || null,
  //   token_type: user_info.token_type || null,
  // };
};

/**
 * @description save user info into localStorage
 * @param token: string
 */
export const saveData = (value: string): void => {
  window.localStorage.setItem(ID_USER_INFO, value);
};

/**
 * @description remove user info form localStorage
 */
export const destroyData = (): void => {
  window.localStorage.removeItem(ID_USER_INFO);
};

export default { getData, saveData, destroyData };
