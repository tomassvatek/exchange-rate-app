import React, { useRef, useState } from 'react';
import { Input } from 'styled';
import styled from 'styled-components';

const ComboBoxWrapper = styled.div`
  position: relative;
  color: black;
`;

const ComboBoxInputWithIcon = styled.div`
  position: relative;
  .arrow-icon {
    position: absolute;
    top: 15%;
    right: 0.625rem;
    cursor: pointer;
  }
`;

const WhisperWrapper = styled.div`
  position: absolute;
  top: 2.7rem;
  left: 0;
  z-index: 1;
  width: 100%;
  max-height: 10rem;
  overflow-y: auto;
  background-color: white;
  border-radius: 0.313rem;
`;

const WhisperItem = styled.div`
  padding: 0.313rem 0.625rem;
  cursor: pointer;
  color: black;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export type ComboBoxOption = {
  label: string;
  value: string;
};

type ComboBoxProps = {
  options: ComboBoxOption[];
  placeholder?: string;
  initialValue?: string;
  readOnly?: boolean;
  onSelect?: (option: ComboBoxOption) => void;
};

const ComboBox: React.FC<ComboBoxProps> = ({
  options,
  placeholder,
  readOnly,
  initialValue = '',
  onSelect = () => false,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>(initialValue);
  const [showWhisper, setShowWhisper] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const previousSearchTerm = useRef<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowWhisper(value.trim().length > 0);
  };

  const handleSelectOption = (option: ComboBoxOption) => {
    setSearchTerm(option.label);
    onSelect(option);
    setShowWhisper(false);
  };

  const resetSearchTerm = () => {
    if (readOnly) return;

    if (!showWhisper) {
      previousSearchTerm.current = searchTerm;
      setSearchTerm('');
      setShowWhisper(true);
      inputRef.current?.focus();
    } else {
      setSearchTerm(previousSearchTerm.current);
      setShowWhisper(false);
    }
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ComboBoxWrapper>
      <ComboBoxInputWithIcon>
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          readOnly={readOnly}
          onChange={handleInputChange}
        />
        {!readOnly && (
          <span className="arrow-icon" onClick={resetSearchTerm}>
            {showWhisper ? '🔼' : '⬇️'}
          </span>
        )}
      </ComboBoxInputWithIcon>
      {showWhisper && (
        <WhisperWrapper>
          {filteredOptions.map((option) => (
            <WhisperItem
              key={option.value}
              onClick={() => handleSelectOption(option)}
            >
              {option.label}
            </WhisperItem>
          ))}
        </WhisperWrapper>
      )}
    </ComboBoxWrapper>
  );
};

export default ComboBox;
