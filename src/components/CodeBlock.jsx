import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const highlightCPP = (code) => {
  if (!code) return '';
  
  // Escape HTML characters
  let html = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Temporarily replace comments to avoid keyword matching inside them
  const comments = [];
  html = html.replace(/(\/\/.*)/g, (match) => {
    comments.push(match);
    return `__COMMENT_PLACEHOLDER_${comments.length - 1}__`;
  });

  // Keywords (control flow, primitives, qualifiers)
  const keywords = [
    'int', 'double', 'float', 'char', 'bool', 'void', 'class', 'struct', 
    'public', 'private', 'protected', 'template', 'typename', 'return', 
    'for', 'while', 'if', 'else', 'const', 'auto', 'nullptr', 'true', 'false',
    'std', 'new', 'delete'
  ];
  const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
  html = html.replace(keywordRegex, '<span class="text-[#c084fc] font-semibold">$1</span>');

  // Standard Library Types / Data Structures
  const stdTypes = [
    'vector', 'string', 'unordered_map', 'unordered_set', 'map', 'set', 
    'stack', 'queue', 'priority_queue', 'pair', 'greater', 'less', 
    'TreeNode', 'ListNode', 'hash', 'greater'
  ];
  const stdTypesRegex = new RegExp(`\\b(${stdTypes.join('|')})\\b`, 'g');
  html = html.replace(stdTypesRegex, '<span class="text-[#22d3ee] font-medium">$1</span>');

  // Common operations / methods
  const methods = [
    'sort', 'max', 'min', 'lower_bound', 'upper_bound', 'push_back', 
    'push', 'pop', 'top', 'front', 'empty', 'size', 'count', 'begin', 'end', 
    'isalnum', 'tolower', 'back', 'insert', 'erase', 'find', 'clear'
  ];
  const methodsRegex = new RegExp(`\\b(${methods.join('|')})(?=\\()`, 'g');
  html = html.replace(methodsRegex, '<span class="text-[#fcd34d] font-normal">$1</span>');

  // Numbers (integers and floats)
  html = html.replace(/\b(\d+)\b/g, '<span class="text-[#34d399] font-medium">$1</span>');

  // Restore comments with styling
  comments.forEach((comment, index) => {
    html = html.replace(`__COMMENT_PLACEHOLDER_${index}__`, `<span class="text-slate-500 font-light italic">${comment}</span>`);
  });

  return html;
};

export default function CodeBlock({ code, title = "C++ ACCEPTED SOLUTION", maxHeightClass = "max-h-[480px]" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  const lines = code.trim().split('\n');

  return (
    <div className="relative group rounded-xl overflow-hidden border border-purple-900/30 bg-[#0c0818]/95 font-mono text-sm leading-relaxed shadow-inner">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-purple-950/40 bg-[#140e26] text-xs text-slate-400 font-sans">
        <span className="flex items-center gap-1.5 font-medium tracking-wide">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
          {title}
        </span>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all duration-200 cursor-pointer ${
            copied
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
              : 'hover:bg-purple-900/40 hover:text-white border border-transparent'
          }`}
        >
          {copied ? (
            <>
              <Check size={13} className="animate-scale" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={13} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code viewport with line numbers */}
      <div className={`flex overflow-x-auto p-4 ${maxHeightClass}`}>
        {/* Line numbers */}
        <div className="select-none text-right pr-4 text-purple-900/50 border-r border-purple-950/30 text-xs text-right min-w-[2.5rem]">
          {lines.map((_, idx) => (
            <div key={idx} className="h-5">
              {idx + 1}
            </div>
          ))}
        </div>

        {/* Highlighted code */}
        <pre className="pl-4 text-slate-300 overflow-x-auto whitespace-pre font-mono text-xs md:text-sm text-left flex-1">
          {lines.map((line, idx) => (
            <div
              key={idx}
              className="h-5 hover:bg-purple-950/20 px-1 rounded-sm transition-colors duration-150"
              dangerouslySetInnerHTML={{ __html: highlightCPP(line) || '&nbsp;' }}
            />
          ))}
        </pre>
      </div>
    </div>
  );
}
