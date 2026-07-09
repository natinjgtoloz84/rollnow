/* @ds-bundle: {"format":4,"namespace":"RollNowDesignSystem_2adbdf","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"71662ccaaa94","components/core/Button.jsx":"f09d65e57299","components/core/Card.jsx":"7760e8cbdce0","components/core/IconButton.jsx":"a6e959e36448","components/core/Tag.jsx":"385720379e30","components/feedback/Dialog.jsx":"1a75cae9f8ad","components/feedback/Toast.jsx":"55a6c954008e","components/feedback/Tooltip.jsx":"b7c88707cd79","components/forms/Checkbox.jsx":"1c1f6b7e9871","components/forms/Input.jsx":"7ff3ad709c29","components/forms/Radio.jsx":"bebd9ca3f27f","components/forms/Select.jsx":"34e221e731ea","components/forms/Switch.jsx":"a9a7d2a64c24","components/navigation/Tabs.jsx":"c1f3bf7f6cf4","ui_kits/mobile_app/BottomNav.jsx":"e450575f9c63","ui_kits/mobile_app/Home.jsx":"57d35a9cfd6f","ui_kits/mobile_app/OrderDetail.jsx":"13e91b1e1cdc","ui_kits/mobile_app/Profile.jsx":"32cf5a631bd1","ui_kits/mobile_app/Rewards.jsx":"c579b4882d23"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RollNowDesignSystem_2adbdf = window.RollNowDesignSystem_2adbdf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const toneStyles = {
  primary: {
    background: "var(--red-600)",
    color: "var(--white)"
  },
  dark: {
    background: "var(--ink-900)",
    color: "var(--white)"
  },
  success: {
    background: "var(--green-500)",
    color: "var(--ink-900)"
  },
  info: {
    background: "var(--blue-500)",
    color: "var(--white)"
  },
  warning: {
    background: "var(--yellow-500)",
    color: "var(--ink-900)"
  },
  neutral: {
    background: "var(--ink-100)",
    color: "var(--ink-900)"
  }
};
function Badge({
  children,
  tone = "primary",
  style
}) {
  const t = toneStyles[tone] || toneStyles.primary;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 12px",
      borderRadius: "var(--radius-full)",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "12px",
      letterSpacing: "0.03em",
      textTransform: "uppercase",
      border: "var(--border-width-default) solid var(--ink-900)",
      ...t,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizeStyles = {
  sm: {
    padding: "8px 18px",
    fontSize: "13px",
    gap: "6px"
  },
  md: {
    padding: "12px 24px",
    fontSize: "15px",
    gap: "8px"
  },
  lg: {
    padding: "16px 32px",
    fontSize: "17px",
    gap: "10px"
  }
};
const variantStyles = {
  primary: {
    background: "var(--red-600)",
    color: "var(--white)",
    border: "var(--border-width-default) solid var(--ink-900)",
    boxShadow: "var(--shadow-pop-sm)"
  },
  dark: {
    background: "var(--ink-900)",
    color: "var(--white)",
    border: "var(--border-width-default) solid var(--ink-900)",
    boxShadow: "var(--shadow-pop-sm)"
  },
  secondary: {
    background: "var(--white)",
    color: "var(--ink-900)",
    border: "var(--border-width-default) solid var(--ink-900)",
    boxShadow: "var(--shadow-pop-sm)"
  },
  ghost: {
    background: "transparent",
    color: "var(--ink-900)",
    border: "var(--border-width-default) solid transparent",
    boxShadow: "none"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  icon = null,
  iconPosition = "left",
  onClick,
  type = "button",
  style
}) {
  const v = variantStyles[variant] || variantStyles.primary;
  const s = sizeStyles[size] || sizeStyles.md;
  const base = {
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    letterSpacing: "0.01em",
    borderRadius: "var(--radius-full)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "transform var(--duration-fast) var(--ease-pop), box-shadow var(--duration-fast) var(--ease-pop)",
    opacity: disabled ? 0.45 : 1,
    ...s,
    ...v,
    ...style
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseDown: e => {
      if (disabled) return;
      e.currentTarget.style.transform = "translate(3px, 3px)";
      e.currentTarget.style.boxShadow = "none";
    },
    onMouseUp: e => {
      if (disabled) return;
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.boxShadow = v.boxShadow || "none";
    },
    onMouseLeave: e => {
      if (disabled) return;
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.boxShadow = v.boxShadow || "none";
    }
  }, icon && iconPosition === "left" ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginRight: s.gap
    }
  }, icon) : null, children, icon && iconPosition === "right" ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginLeft: s.gap
    }
  }, icon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = "var(--space-6)",
  accent,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "var(--border-width-default) solid var(--ink-900)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-pop-md)",
      padding,
      position: "relative",
      overflow: "hidden",
      ...style
    }
  }, accent ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "6px",
      background: accent
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const sizeMap = {
  sm: 32,
  md: 40,
  lg: 48
};
const variantStyles = {
  primary: {
    background: "var(--red-600)",
    color: "var(--white)",
    border: "var(--border-width-default) solid var(--ink-900)"
  },
  dark: {
    background: "var(--ink-900)",
    color: "var(--white)",
    border: "var(--border-width-default) solid var(--ink-900)"
  },
  secondary: {
    background: "var(--white)",
    color: "var(--ink-900)",
    border: "var(--border-width-default) solid var(--ink-900)"
  },
  ghost: {
    background: "var(--ink-100)",
    color: "var(--ink-900)",
    border: "var(--border-width-default) solid transparent"
  }
};
function IconButton({
  icon,
  label,
  variant = "secondary",
  size = "md",
  disabled = false,
  onClick,
  style
}) {
  const px = sizeMap[size] || sizeMap.md;
  const v = variantStyles[variant] || variantStyles.secondary;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    style: {
      width: px,
      height: px,
      borderRadius: "var(--radius-full)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      boxShadow: variant === "ghost" ? "none" : "var(--shadow-pop-sm)",
      transition: "transform var(--duration-fast) var(--ease-pop)",
      ...v,
      ...style
    },
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = "translate(2px,2px)"),
    onMouseUp: e => !disabled && (e.currentTarget.style.transform = "none"),
    onMouseLeave: e => !disabled && (e.currentTarget.style.transform = "none")
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  selected = false,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "8px 16px",
      borderRadius: "var(--radius-full)",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "14px",
      cursor: onClick ? "pointer" : "default",
      border: "var(--border-width-default) solid var(--ink-900)",
      background: selected ? "var(--yellow-500)" : "var(--white)",
      color: "var(--ink-900)",
      transition: "background var(--duration-fast) var(--ease-standard)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  onClose,
  actions,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--surface-overlay)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 50
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--surface-card)",
      border: "var(--border-width-bold) solid var(--ink-900)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-pop-lg)",
      padding: "var(--space-8)",
      maxWidth: "360px",
      width: "90%",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "28px",
      letterSpacing: "0.01em",
      color: "var(--ink-900)",
      margin: "0 0 12px"
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-body)",
      fontSize: "15px",
      lineHeight: 1.5,
      marginBottom: "var(--space-6)"
    }
  }, children), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      justifyContent: "flex-end"
    }
  }, actions) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const toneStyles = {
  success: {
    background: "var(--green-500)",
    color: "var(--ink-900)"
  },
  info: {
    background: "var(--blue-500)",
    color: "var(--white)"
  },
  warning: {
    background: "var(--yellow-500)",
    color: "var(--ink-900)"
  },
  danger: {
    background: "var(--red-600)",
    color: "var(--white)"
  },
  dark: {
    background: "var(--ink-900)",
    color: "var(--white)"
  }
};
function Toast({
  children,
  tone = "dark",
  icon,
  style
}) {
  const t = toneStyles[tone] || toneStyles.dark;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      padding: "14px 20px",
      borderRadius: "var(--radius-md)",
      border: "var(--border-width-default) solid var(--ink-900)",
      boxShadow: "var(--shadow-pop-md)",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "14px",
      ...t,
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  children,
  label,
  position = "top"
}) {
  const [show, setShow] = useState(false);
  const posStyle = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    }
  }[position] || {};
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      ...posStyle,
      background: "var(--ink-900)",
      color: "var(--white)",
      padding: "6px 12px",
      borderRadius: "var(--radius-sm)",
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      fontWeight: 600,
      whiteSpace: "nowrap",
      zIndex: 60
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--ink-900)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      width: 22,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0,
      cursor: "inherit",
      margin: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: "6px",
      border: "var(--border-width-default) solid var(--ink-900)",
      background: checked ? "var(--red-600)" : "var(--white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--white)",
      fontSize: "14px",
      fontWeight: 900
    }
  }, checked ? "✓" : "")), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const {
  useState
} = React;
function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = "text",
  error,
  disabled = false,
  icon,
  style
}) {
  const [focused, setFocused] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: 700,
      color: "var(--ink-900)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "12px 16px",
      borderRadius: "var(--radius-md)",
      border: `var(--border-width-default) solid ${error ? "var(--red-600)" : focused ? "var(--blue-500)" : "var(--ink-900)"}`,
      background: disabled ? "var(--ink-100)" : "var(--white)",
      boxShadow: focused ? "var(--shadow-pop-sm)" : "none",
      transition: "box-shadow var(--duration-fast) var(--ease-standard)"
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--ink-500)"
    }
  }, icon) : null, /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: onChange,
    style: {
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--ink-900)",
      width: "100%"
    }
  })), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: "var(--red-600)",
      fontWeight: 600
    }
  }, error) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--ink-900)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      width: 22,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0,
      cursor: "inherit",
      margin: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: "var(--radius-full)",
      border: "var(--border-width-default) solid var(--ink-900)",
      background: "var(--white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: "var(--radius-full)",
      background: "var(--red-600)"
    }
  }) : null)), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const {
  useState
} = React;
function Select({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  disabled = false,
  style
}) {
  const [focused, setFocused] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: 700,
      color: "var(--ink-900)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-md)",
      border: `var(--border-width-default) solid ${focused ? "var(--blue-500)" : "var(--ink-900)"}`,
      background: disabled ? "var(--ink-100)" : "var(--white)",
      boxShadow: focused ? "var(--shadow-pop-sm)" : "none"
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: onChange,
    style: {
      appearance: "none",
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--ink-900)",
      padding: "12px 40px 12px 16px",
      width: "100%"
    }
  }, options.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.value ?? opt,
    value: opt.value ?? opt
  }, opt.label ?? opt))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: "16px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      fontSize: "12px"
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--ink-900)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange({
      target: {
        checked: !checked
      }
    }),
    style: {
      width: 44,
      height: 26,
      borderRadius: "var(--radius-full)",
      border: "var(--border-width-default) solid var(--ink-900)",
      background: checked ? "var(--green-500)" : "var(--ink-100)",
      position: "relative",
      transition: "background var(--duration-standard) var(--ease-standard)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "1px",
      left: checked ? "20px" : "1px",
      width: 20,
      height: 20,
      borderRadius: "var(--radius-full)",
      background: "var(--white)",
      border: "var(--border-width-default) solid var(--ink-900)",
      transition: "left var(--duration-standard) var(--ease-pop)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      borderBottom: "var(--border-width-default) solid var(--ink-100)",
      ...style
    }
  }, tabs.map(tab => {
    const isActive = tab.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.value,
      type: "button",
      onClick: () => onChange && onChange(tab.value),
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: "15px",
        padding: "10px 6px",
        marginBottom: "-2px",
        background: "transparent",
        border: "none",
        borderBottom: `3px solid ${isActive ? "var(--red-600)" : "transparent"}`,
        color: isActive ? "var(--ink-900)" : "var(--ink-500)",
        cursor: "pointer"
      }
    }, tab.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/BottomNav.jsx
try { (() => {
function BottomNav({
  active,
  onChange
}) {
  const items = [{
    key: "home",
    label: "Home",
    icon: "house"
  }, {
    key: "orders",
    label: "Orders",
    icon: "receipt"
  }, {
    key: "rewards",
    label: "Rewards",
    icon: "gift"
  }, {
    key: "profile",
    label: "Profile",
    icon: "user-circle"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderTop: "2px solid var(--ink-900)",
      background: "var(--white)",
      padding: "8px 12px calc(8px + env(safe-area-inset-bottom))"
    }
  }, items.map(it => {
    const isActive = it.key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      onClick: () => onChange(it.key),
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
        padding: "6px 0",
        background: "none",
        border: "none",
        cursor: "pointer",
        color: isActive ? "var(--red-600)" : "var(--ink-500)",
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: "11px"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: `ph-fill ph-${it.icon}`,
      style: {
        fontSize: "22px"
      }
    }), it.label);
  }));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/BottomNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/Home.jsx
try { (() => {
const {
  Card,
  Badge,
  Tag,
  Button,
  IconButton
} = window.RollNowDesignSystem_2adbdf;
const categories = [{
  key: "food",
  label: "Food"
}, {
  key: "mart",
  label: "Mart"
}, {
  key: "ride",
  label: "Ride"
}, {
  key: "parcel",
  label: "Parcel"
}];
const offers = [{
  title: "20% OFF",
  sub: "Your first roll today",
  accent: "var(--yellow-500)"
}, {
  title: "FREE DELIVERY",
  sub: "Orders over RM30",
  accent: "var(--green-500)"
}];
const merchants = [{
  name: "Nasi Lemak Corner",
  tag: "Food",
  eta: "15–25 min",
  rating: "4.8"
}, {
  name: "FreshMart Express",
  tag: "Mart",
  eta: "10–20 min",
  rating: "4.6"
}, {
  name: "Roti Bakar House",
  tag: "Food",
  eta: "20–30 min",
  rating: "4.9"
}];
function Home({
  cat,
  setCat,
  onOpenOrder
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, "Deliver to"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "20px",
      color: "var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-map-pin",
    style: {
      color: "var(--red-600)",
      marginRight: 6
    }
  }), "Bangsar South")), /*#__PURE__*/React.createElement(IconButton, {
    label: "Notifications",
    icon: /*#__PURE__*/React.createElement("i", {
      className: "ph-fill ph-bell"
    }),
    variant: "secondary"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      overflowX: "auto"
    }
  }, categories.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c.key,
    selected: cat === c.key,
    onClick: () => setCat(c.key)
  }, c.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      overflowX: "auto"
    }
  }, offers.map(o => /*#__PURE__*/React.createElement(Card, {
    key: o.title,
    accent: o.accent,
    style: {
      minWidth: "220px",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "26px",
      color: "var(--ink-900)"
    }
  }, o.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "13px",
      color: "var(--text-body)"
    }
  }, o.sub)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "22px",
      color: "var(--ink-900)",
      marginBottom: "10px"
    }
  }, "NEAR YOU"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }
  }, merchants.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.name,
    padding: "14px",
    style: {
      cursor: "pointer"
    },
    onClick: onOpenOrder
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      alignItems: "center"
    },
    onClick: onOpenOrder
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "var(--radius-md)",
      background: "var(--surface-sunken)",
      border: "2px solid var(--ink-900)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-storefront",
    style: {
      fontSize: "26px",
      color: "var(--ink-500)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: "15px",
      color: "var(--ink-900)"
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      color: "var(--text-muted)"
    }
  }, m.tag, " \xB7 ", m.eta)), /*#__PURE__*/React.createElement(Badge, {
    tone: "warning"
  }, "\u2605 ", m.rating)))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/OrderDetail.jsx
try { (() => {
const {
  useState
} = React;
const {
  Button,
  Badge,
  Card
} = window.RollNowDesignSystem_2adbdf;
function OrderDetail({
  onBack,
  onCheckout
}) {
  const [count, setCount] = useState(1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      borderBottom: "2px solid var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-arrow-left",
    style: {
      fontSize: "22px",
      color: "var(--ink-900)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "20px",
      color: "var(--ink-900)"
    }
  }, "NASI LEMAK CORNER")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "14px",
    accent: "var(--green-500)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: "15px",
      color: "var(--ink-900)"
    }
  }, "Special Nasi Lemak Set"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "13px",
      color: "var(--text-muted)"
    }
  }, "Rice, fried chicken, sambal, egg"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "18px",
      color: "var(--red-600)",
      marginTop: 6
    }
  }, "RM 12.90")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(Math.max(1, count - 1)),
    style: qtyBtn
  }, "-"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      minWidth: 16,
      textAlign: "center"
    }
  }, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1),
    style: qtyBtn
  }, "+")))), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    style: {
      alignSelf: "flex-start"
    }
  }, "Free delivery applied")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px",
      borderTop: "2px solid var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: {
      width: "100%"
    },
    onClick: onCheckout
  }, "Checkout \xB7 RM ", (count * 12.9).toFixed(2))));
}
const qtyBtn = {
  width: 28,
  height: 28,
  borderRadius: "var(--radius-full)",
  border: "2px solid var(--ink-900)",
  background: "var(--white)",
  fontWeight: 900,
  cursor: "pointer"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/OrderDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/Profile.jsx
try { (() => {
const {
  Card,
  Switch,
  Button
} = window.RollNowDesignSystem_2adbdf;
function Profile() {
  const [notifs, setNotifs] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
  const rows = [{
    icon: "map-pin",
    label: "Saved addresses"
  }, {
    icon: "credit-card",
    label: "Payment methods"
  }, {
    icon: "receipt",
    label: "Order history"
  }, {
    icon: "question",
    label: "Help center"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "var(--radius-full)",
      background: "var(--red-600)",
      border: "2px solid var(--ink-900)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--white)",
      fontFamily: "var(--font-display)",
      fontSize: "24px"
    }
  }, "A"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "22px",
      color: "var(--ink-900)"
    }
  }, "ALEX TAN"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "13px",
      color: "var(--text-muted)"
    }
  }, "alex.tan@email.com"))), /*#__PURE__*/React.createElement(Card, {
    padding: "14px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--ink-900)"
    }
  }, "Push notifications"), /*#__PURE__*/React.createElement(Switch, {
    checked: notifs,
    onChange: e => setNotifs(e.target.checked)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--ink-900)"
    }
  }, "Dark mode"), /*#__PURE__*/React.createElement(Switch, {
    checked: darkMode,
    onChange: e => setDarkMode(e.target.checked)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      padding: "14px 4px",
      borderBottom: "1px solid var(--ink-100)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `ph-fill ph-${r.icon}`,
    style: {
      fontSize: "20px",
      color: "var(--ink-500)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontWeight: 600,
      color: "var(--ink-900)"
    }
  }, r.label), /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-caret-right",
    style: {
      color: "var(--ink-300)"
    }
  })))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Log out"));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/Profile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/Rewards.jsx
try { (() => {
const {
  useState
} = React;
const {
  Card,
  Button,
  Badge
} = window.RollNowDesignSystem_2adbdf;
function Rewards() {
  const [rolled, setRolled] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "28px",
      color: "var(--ink-900)"
    }
  }, "REWARDS"), /*#__PURE__*/React.createElement(Card, {
    padding: "24px",
    style: {
      background: "var(--ink-900)",
      border: "2px solid var(--ink-900)",
      textAlign: "center",
      color: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "0.04em",
      color: "var(--yellow-500)"
    }
  }, "DAILY ROLL"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "40px",
      margin: "8px 0"
    }
  }, rolled ? "RM 5 OFF!" : "?"), /*#__PURE__*/React.createElement(Button, {
    variant: rolled ? "secondary" : "primary",
    onClick: () => setRolled(true),
    disabled: rolled
  }, rolled ? "Claimed" : "Roll Now")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: "15px",
      color: "var(--ink-900)",
      marginBottom: "10px"
    }
  }, "Your points"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-coin",
    style: {
      fontSize: "36px",
      color: "var(--yellow-500)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "32px",
      color: "var(--ink-900)"
    }
  }, "1,240"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, [{
    name: "RM10 Voucher",
    cost: "500 pts"
  }, {
    name: "Free Delivery Pass",
    cost: "300 pts"
  }, {
    name: "Mystery Box",
    cost: "800 pts"
  }].map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.name,
    padding: "14px",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "var(--ink-900)"
    }
  }, r.name), /*#__PURE__*/React.createElement(Badge, {
    tone: "info"
  }, r.cost)))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/Rewards.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
