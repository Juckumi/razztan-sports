import { useEffect, useState } from "react";
import styled from "styled-components";
import { useClickOutside } from "../hooks/useClickOutside";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaFilter } from "react-icons/fa6";

const StyledSelect = styled.div`
    position: relative;
    width: fit-content;
`;
const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 1rem;

    @media (max-width: 1200px) {
        align-items: flex;

        flex-direction: column;
    }

    flex-direction: ${({ $direction }) =>
        $direction === "column" ? $direction : "row"};

    .tooltip {
        display: none;
        transition: visibility 1s;
    }
    &:hover {
        .tooltip {
            display: initial;
        }
    }
`;

const StyledSpan = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-overflow: ellipsis;
    color: var(--color-brand-green-500);
    padding: 0.5rem;
    border: 1px solid;
    border-radius: 0.5rem 0.5rem
        ${({ $isOpen }) => ($isOpen ? " 0 0" : "0.5rem 0.5rem ")};
    ${({ $isOpen }) => ($isOpen ? "border-bottom: none;" : " ")}
    & > * {
        margin: 0 1rem;
    }
    ${(props) =>
        props.$error && "outline:2px solid var(--color-warning);border:none;"};

    span {
        max-width: 5rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`;

const StyledArrow = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    /* margin: 0 0 0 1rem; */
`;

const Ul = styled.ul`
    position: absolute;
    z-index: 10;
    width: 100%;
    top: 100%;
    background-color: var(--color-brand-bone-200);
    border-radius: 0 0 0.4rem 0.4rem;
    overflow-x: hidden;
    overflow-y: hidden;
    border: 1px solid;

    animation: aparecerDesdeArriba 0.4s;
    @keyframes aparecerDesdeArriba {
        from {
            transform: scaleY(-0);
            transform-origin: top;
        }
        to {
            transform: scaleY(100%);
            transform-origin: top;
        }
    }
    li {
        padding: 0.5rem 1rem;
        transition: 0.3s;
        cursor: pointer;
        &:hover {
            background-color: var(--color-brand-green-500);
            color: var(--color-white);
        }
    }
`;

const SelectedItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    flex-direction: ${({ $direction }) =>
        $direction === "column" ? $direction : "row"};
`;

const SelectedItem = styled.span`
    background-color: var(--color-brand-green-500);
    color: var(--color-white);
    padding: 0.3rem 0.5rem;
    border-radius: 0.2rem;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.6rem;
`;
const SelectedItemDelete = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0.7rem;
    height: 0.7rem;
    align-self: flex-start;
    cursor: pointer;
    border-radius: 50%;
    margin: 0;
    padding: 0;
    * {
        margin: 0;
    }
    transition: 0.3s;

    &:hover {
        background-color: var(--color-warning);
    }
`;
const Tooltip = styled.ul`
    background-color: var(--color-brand-green-100);
    color: #fff;
    text-align: justify;
    list-style-type: circle;

    border-radius: var(--b-radius-sm);
    padding: 0.5rem 1rem 0.5rem 2rem;
    position: absolute;
    min-width: fit-content;
    z-index: 1;
    top: -5px;
    left: 105%;
    li {
        white-space: nowrap;
        width: 100%;
    }

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 100%;
        margin-top: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent var(--color-brand-green-100) transparent
            transparent;
    }
`;
function Select({
    selectTitle,
    render,
    data,
    onSelectionChange,
    isFilter = false,
    direction,
    multiple = null,
    order = () => {},
    initialvalue,
    error,
    tooltip,
    clearError = () => {},
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState(initialvalue || "");

    const ref = useClickOutside(() => setIsOpen(false));
    useEffect(() => {
        onSelectionChange(selectedItems);
    }, [selectedItems, initialvalue]);

    const handleSelect = (item) => {
        if (multiple) {
            setSelectedItems((prev) =>
                prev.includes(item)
                    ? prev.filter((i) => i !== item)
                    : [...prev, item.name]
            );
        } else {
            setSelectedItems(item);
            setIsOpen(false);
        }
    };

    return (
        <Container $direction={direction}>
            <StyledSelect ref={ref}>
                <StyledSpan
                    onClick={(e) => {
                        setIsOpen(!isOpen);
                        clearError();
                    }}
                    $isOpen={isOpen}
                    $error={error || null}
                >
                    {isFilter && <FaFilter />}
                    <span>
                        {!multiple && selectedItems.length !== 0
                            ? selectedItems
                            : selectedItems.length !== 0
                            ? selectedItems.length + " " + selectTitle
                            : selectTitle}
                    </span>
                    <StyledArrow>
                        {isOpen ? (
                            <MdKeyboardArrowUp />
                        ) : (
                            <MdKeyboardArrowDown />
                        )}
                    </StyledArrow>
                </StyledSpan>
                {isOpen && (
                    <Ul>
                        {data.filter((item) => {
                            if (multiple) {
                                return !selectedItems.includes(item.name);
                            }

                            return item !== selectedItems;
                        }).length !== 0 ? (
                            <>
                                {data
                                    .filter((item) => {
                                        if (multiple) {
                                            return !selectedItems.includes(
                                                item.name
                                            );
                                        }

                                        return item !== selectedItems;
                                    })
                                    .sort(order)
                                    .map((item, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleSelect(item)}
                                        >
                                            {render(item)}
                                        </li>
                                    ))}
                            </>
                        ) : (
                            <li> No hay más </li>
                        )}
                    </Ul>
                )}
            </StyledSelect>

            {multiple && (
                <>
                    {selectedItems?.length > 0 && (
                        <SelectedItems $direction={direction}>
                            {selectedItems.map((item, index) => (
                                <SelectedItem key={index}>
                                    {/* <Icon sportName={item} withText={false} /> */}
                                    {item}
                                    <SelectedItemDelete
                                        onClick={() => handleSelect(item)}
                                    >
                                        &times;
                                    </SelectedItemDelete>
                                </SelectedItem>
                            ))}
                        </SelectedItems>
                    )}
                </>
            )}
            {tooltip && (
                <Tooltip className="tooltip">
                    {tooltip.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </Tooltip>
            )}
        </Container>
    );
}

export default Select;
