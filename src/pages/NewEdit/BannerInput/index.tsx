import { useField } from '@rocketseat/unform';
import React, { useEffect, useRef, useState } from 'react';
import { MdCameraAlt } from 'react-icons/md';
import api from 'services/api';

import { Container } from './styles';

type Props = {
  name: string;
  imageId: number | null;
  imageUrl: string;
};

export default function BannerInput({ name, imageId, imageUrl }: Props) {
  const ref: any = useRef();

  const { defaultValue, registerField, error } = useField(name);

  const [file, setFile] = useState<number>(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState<string>(
    defaultValue && defaultValue.url
  );

  useEffect(() => {
    if (imageUrl) {
      setPreview(imageUrl);
    }
  }, [imageUrl]);

  useEffect(() => {
    if (imageId) {
      setFile(imageId);
    }
  }, [imageId]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e: any) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner">
        {preview ? (
          <img src={preview} alt="" />
        ) : (
          <div>
            <MdCameraAlt size={56} color="rgba(255,255,255,0.3)" />
            <strong>Selecionar imagem</strong>
          </div>
        )}
        <input
          id="banner"
          type="file"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
      {error && <span>{error}</span>}
    </Container>
  );
}
