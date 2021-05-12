type Validate = {
  userId: boolean;
  title: boolean;
  body: boolean;
};

export const isEmpty = (object: unknown): boolean =>
  object != null && !Object.values(object).some((x) => x !== null && x !== '');

export const validate = (
  userId: string,
  title: string,
  body: string
): Validate => {
  return {
    userId: userId.length === 0,
    title: title.length === 0,
    body: body.length === 0
  };
};
