import React, { useState } from "react";

export const AddressForm = ({ initialData = {}, onSubmit }) => {
  const [address, setAddress] = useState(initialData.address || "");
  const [lot, setLot] = useState(initialData.lot || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ address, lot });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="address">Endereço:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lot">Lote:</label>
        <input
          type="text"
          id="lot"
          value={lot}
          onChange={(e) => setLot(e.target.value)}
          required
        />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};
