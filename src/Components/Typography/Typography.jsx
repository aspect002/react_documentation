import React from 'react';
import { StyledH1, StyledText, CodeBlock, Container, ListItem } from './styled';

const Typography = ({ title, children }) => {
    const text = typeof children === 'string' ? children : '';
    const lines = text.split('\n');
    let inCodeBlock = false;
    const codeLines = [];

    return (
        <Container>
            <StyledH1>{title}</StyledH1>
            <ul>
                {lines.map((line, index) => {
                    if (line.trim() === '```') {
                        inCodeBlock = !inCodeBlock;
                        if (!inCodeBlock) {
                            const codeContent = codeLines.join('\n');
                            codeLines.length = 0;
                            return (
                                <CodeBlock key={index} style={{ whiteSpace: 'pre' }}>
                                    <code>{codeContent}</code>
                                </CodeBlock>
                            );
                        }
                        return null;
                    }

                    if (inCodeBlock) {
                        codeLines.push(line);
                        return null;
                    }

                    const parts = line.split(/(~+)/);
                    const newLines = [];

                    parts.forEach((part, partIndex) => {
                        const tildeCount = part.match(/^(~+)/);
                        const numTildes = tildeCount ? tildeCount[0].length : 0;
                        const cleanedPart = part.replace(/^(~+)/, '').trim();

                       
                        for (let i = 0; i < numTildes; i++) {
                            newLines.push(<StyledText key={`${index}-${partIndex}-empty-${i}`}>&nbsp;</StyledText>);
                        }

                        if (cleanedPart.startsWith('*') || cleanedPart.startsWith('-')) {
                            newLines.push(
                                <ListItem key={`${index}-${partIndex}`}>
                                    {cleanedPart.substring(1).trim()}
                                </ListItem>
                            );
                        } else if (cleanedPart) {
                            newLines.push(
                                <StyledText key={`${index}-${partIndex}`}>
                                    {cleanedPart}
                                </StyledText>
                            );
                        }
                    });

                    return <React.Fragment key={index}>{newLines}</React.Fragment>;
                })}
            </ul>
        </Container>
    );
};

export default Typography;
