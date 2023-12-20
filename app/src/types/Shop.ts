export type Purchase = {
  total: number;
  documents: Documents[];
};

export type Documents = {
  installments: number;
  installment_value: number;
  charge_id: number;
  status: string;
  total: number;
  payment: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $databaseId: string;
  $collectionId: string;
};
