import * as React from "react";

interface QRCodeProps {
    /**
     * The value to encode in the code
     */
    value: string;
    /**
     * Size of the code in pixels
     */
    size?: number;
    /**
     * QR Error correction level
     */
    level?: "L" | "M" | "Q" | "H";
    /**
     * Color of the bright squares
     */
    bgColor?: string;
    /**
     * Color of the dark squares
     */
    fgColor?: string;
}

/**
 * The component
 */
export function QRCode(props: QRCodeProps & React.SVGProps): React.ReactElement<{}>;
