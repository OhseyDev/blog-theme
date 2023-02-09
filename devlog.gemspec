# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "devlog"
  spec.version       = "0.1.0"
  spec.authors       = ["Olivia"]
  spec.email         = ["90527387+OhseyDev@users.noreply.github.com"]

  spec.summary       = "A simple devlog page theme for Ohsey.me"
  spec.homepage      = "https://github.com/OhseyDev/devlog-theme"
  spec.license       = "MPL2.0"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
end
