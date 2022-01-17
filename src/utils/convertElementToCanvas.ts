import html2canvas from "html2canvas";
import { useState, useEffect } from "react";

export const convertElementToCanvas = async (element: HTMLElement) => await html2canvas(element);
